import Link from "next/link";


export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Hello Next.js 👋</h1>
      <p>นี่คือหน้าแรกของเว็บของคุณ</p>

      <hr style={{ margin: "20px 0" }} />

      <Link href="/about">ไปหน้า About</Link>
    </div>
  );
}
