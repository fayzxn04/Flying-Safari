import HomeParent from "@/components/home/HomeParent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flying Safari",
  description: "Travelling company",
};

export default function Home() {
  return <HomeParent />;
}
