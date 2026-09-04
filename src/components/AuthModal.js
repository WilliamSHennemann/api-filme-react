import { useState } from "react";
import { useUser } from "../context/UserContext";
import "./auth.css";

export default function AuthModal({ onClose }) {
  const { login, register } = useUser();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  function submit(event) {
    event.preventDefault();
    if (form.password.length < 6) return setMessage("A senha precisa ter ao menos 6 caracteres.");
    const result = mode === "login"
      ? login(form.email, form.password)
      : register(form.name.trim(), form.email.trim(), form.password);
    if (result.ok) onClose(); else setMessage(result.message);
  }

  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
      <p className="eyebrow">MINHA LISTA</p>
      <h2 id="auth-title">{mode === "login" ? "Entre para continuar" : "Crie sua conta"}</h2>
      <p className="auth-copy">Salve favoritos e deixe seus comentários nos filmes.</p>
      <form onSubmit={submit}>
        {mode === "register" && <label>Nome<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>}
        <label>E-mail<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
        <label>Senha<input required type="password" minLength="6" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        {message && <p className="form-error">{message}</p>}
        <button className="primary-button" type="submit">{mode === "login" ? "Entrar" : "Criar conta"}</button>
      </form>
      <button className="text-button" onClick={() => { setMode(mode === "login" ? "register" : "login"); setMessage(""); }}>
        {mode === "login" ? "Ainda não tem conta? Cadastre-se" : "Já tem uma conta? Entrar"}
      </button>
    </section>
  </div>;
}
