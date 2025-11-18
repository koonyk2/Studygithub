import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>หน้า About</h1>
      <p>นี่คือหน้าข้อมูลของเว็บของคุณ</p>

      <Link href="/">🔙 กลับไปหน้า Home</Link>
    </div>
  );
}
