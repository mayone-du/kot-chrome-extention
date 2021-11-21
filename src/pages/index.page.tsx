import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "src/layout";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
const Button = dynamic(
  async () => {
    const module = await import("src/components/Button");
    return module.Button;
  },
  {
    ssr: false,
    loading: () => {
      return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
    },
  },
);

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="px-2 text-2xl font-bold">KOT Chrome Extention</h1>

      <Button />

      <script defer src="../content.js"></script>
      <script defer src="../background.js"></script>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
