import styled from "styled-components";
export const Container = styled.div`
min-height:100vh;padding:0 5vw 5rem;background:radial-gradient(ellipse at 50% -10%,#373119 0,#151515 38%,#090909 78%);color:#f7f7f7;main{max-width:1320px;margin:auto}.hero{padding:5.5rem 0 3.5rem;text-align:center}.hero h1{margin:.6rem 0 2.3rem;font-size:clamp(2.5rem,6vw,5.2rem);line-height:.98;letter-spacing:-.06em}.hero em{color:#ffcc4d;font-family:Georgia,serif;font-weight:400}.eyebrow{color:#ffcc4d;font-size:.7rem;font-weight:800;letter-spacing:.16em}.notice{position:fixed;right:1.5rem;bottom:1.5rem;z-index:10;padding:.8rem 1rem;border:1px solid #625226;border-radius:10px;background:#272111;color:#ffe08a;box-shadow:0 8px 30px #0008}.status{padding:3rem;text-align:center;color:#aaa}.error{color:#ff9292}`;
export const Header = styled.header`
display:flex;align-items:center;justify-content:space-between;max-width:1320px;margin:auto;padding:1.5rem 0;border-bottom:1px solid #ffffff13;.brand{color:#fff;font-size:1.1rem;font-weight:900;letter-spacing:-.06em;text-decoration:none}.brand span{color:#ffcc4d}.account-actions{display:flex;align-items:center;gap:1rem}.my-list,.account-button{border:0;color:#eee;background:transparent;font:inherit;font-size:.86rem;font-weight:700;text-decoration:none;cursor:pointer}.account-button{padding:.55rem 1rem;border:1px solid #777;border-radius:99px}.account-button:hover{border-color:#ffcc4d;color:#ffcc4d}`;
export const SearchBox = styled.div`
position:relative;display:flex;width:min(100%,650px);margin:auto;border:1px solid #555;border-radius:99px;background:#181818;transition:.2s;&:focus-within{border-color:#ffcc4d;box-shadow:0 0 0 4px #ffcc4d18}input{width:100%;padding:1rem 1.4rem;border:0;outline:0;color:#fff;background:transparent;font:inherit}>button{width:48px;margin:.25rem;border:0;border-radius:50%;color:#191919;background:#ffcc4d;font-size:1.7rem;cursor:pointer}ul{position:absolute;top:calc(100% + .5rem);z-index:5;width:100%;overflow:hidden;list-style:none;border:1px solid #444;border-radius:14px;background:#1d1d1d;box-shadow:0 12px 28px #0009}li button{width:100%;padding:.85rem 1.2rem;border:0;color:#ddd;background:transparent;text-align:left;cursor:pointer}li button:hover{background:#333}`;
export const CategoryBar = styled.nav`
display:flex;justify-content:center;gap:.55rem;padding-bottom:4rem;overflow-x:auto;button{flex:0 0 auto;padding:.6rem 1rem;border:1px solid #3a3a3a;border-radius:99px;color:#bbb;background:#181818;font:inherit;font-size:.85rem;cursor:pointer}button:hover,button.active{border-color:#ffcc4d;color:#191919;background:#ffcc4d}`;
export const Section = styled.section`
margin-top:4.5rem;&.top-rated{padding-top:4rem;border-top:1px solid #ffffff14}.section-heading{display:flex;align-items:end;justify-content:space-between;margin-bottom:1.6rem}.section-heading h2{margin-top:.35rem;font-size:clamp(1.7rem,3vw,2.5rem);letter-spacing:-.04em}.section-heading span{color:#777;font-size:.8rem}.see-all{border:0;color:#ffcc4d;background:transparent;font:inherit;font-weight:700;cursor:pointer}`;
export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5rem 1.3rem;
  list-style: none;

  @media (min-width: 600px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  @media (min-width: 900px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
`;
export const Movie = styled.li`
position:relative;a{display:block;color:inherit;text-decoration:none}img{width:100%;aspect-ratio:2/3;display:block;border-radius:12px;object-fit:cover;background:#252525;box-shadow:0 10px 25px #0005;transition:transform .25s,box-shadow .25s}&:hover img{transform:translateY(-6px);box-shadow:0 18px 34px #0009}.movie-info{display:flex;justify-content:space-between;gap:.4rem;padding-top:.7rem}.movie-info span{overflow:hidden;font-size:.93rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap}.movie-info small{flex:none;color:#ffcc4d}.favorite{position:absolute;top:.55rem;right:.55rem;width:34px;height:34px;border:0;border-radius:50%;color:#fff;background:#0009;font-size:1.3rem;cursor:pointer}.favorite.saved{color:#ff5964}`;
export const EmptyState = styled.p`padding:2rem;color:#aaa;text-align:center;`;
