"use client"
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");
  const createImg = async () => {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_API,
    });
 const response = await openai.createImageVariation(
  fs.createReadStream("Phone.png"),
  1,
  "512x512"
);
image_url = response.data.data[0].url;

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>image url:{imageUrl}</div>
   <img src={imageUrl} width={1000} height={1000}/>
      <button onClick={createImg}><div>click me</div></button>
    </main>
  );
}
