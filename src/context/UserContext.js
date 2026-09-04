import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext(null);
const ADMIN_USER = {
  name: "Administrador",
  email: "admin@cinelist.com",
  password: "admin123",
  role: "admin",
};

const readStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => readStorage("movieUser", null));
  // Apenas a administração é criada previamente. As outras contas nascem
  // exclusivamente pelo formulário de cadastro.
  const [users, setUsers] = useState(() => {
    const savedUsers = readStorage("movieUsers", []);
    return savedUsers.some((item) => item.email === ADMIN_USER.email)
      ? savedUsers
      : [ADMIN_USER, ...savedUsers];
  });
  const [favorites, setFavorites] = useState(() => readStorage("movieFavorites", []));

  useEffect(() => localStorage.setItem("movieUsers", JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem("movieUser", JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem("movieFavorites", JSON.stringify(favorites)), [favorites]);

  const value = useMemo(() => ({
    user,
    favorites,
    login(email, password) {
      const found = users.find((item) => item.email === email.toLowerCase() && item.password === password);
      if (!found) return { ok: false, message: "E-mail ou senha incorretos." };
      setUser({ name: found.name, email: found.email });
      return { ok: true };
    },
    register(name, email, password) {
      const normalizedEmail = email.toLowerCase();
      if (users.some((item) => item.email === normalizedEmail)) {
        return { ok: false, message: "Já existe uma conta com este e-mail." };
      }
      const newUser = { name, email: normalizedEmail, password };
      setUsers((current) => [...current, newUser]);
      setUser({ name, email: normalizedEmail });
      return { ok: true };
    },
    logout() {
      setUser(null);
    },
    isFavorite(movieId) {
      return favorites.some((favorite) => favorite.id === movieId && favorite.savedBy === user?.email);
    },
    toggleFavorite(movie) {
      if (!user) return false;
      setFavorites((current) => current.some((favorite) => favorite.id === movie.id && favorite.savedBy === user.email)
        ? current.filter((favorite) => !(favorite.id === movie.id && favorite.savedBy === user.email))
        : [{ ...movie, savedBy: user.email }, ...current]);
      return true;
    },
  }), [user, users, favorites]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
