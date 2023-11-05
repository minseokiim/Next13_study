import type { Metadata } from "next";
import "./globals.css";
// 기본적 골격을 구성하는 파일

export const metadata: Metadata = {
  title: "Minseo",
  description: "minseo's next page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {/* children의 코드는 page.js에서 리턴한 값을 가져옴 */}
        <h1>
          <a href="/">Web</a>
        </h1>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
        </ol>
        {children}
        <ul>
          <li>
            <a href="/create">create</a>
          </li>
          <li>
            <a href="/update/1">update</a>
          </li>
          <li>
            <input type="button" value="delete"></input>
          </li>
        </ul>
      </body>
    </html>
  );
}
