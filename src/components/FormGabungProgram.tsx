import React from "@astrojs/react";
import { Invoice } from "../fixtures/Invoice";

export default function FormGabungProgram() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/program", {
      method: "POST",
    });

    const { data } = (await response.json()) as { data: Invoice };

    window.location.href = data.invoice_url;
  };

  return (
    <form onSubmit={onSubmit} class="text-zinc-50">
      <p>Udah ada 24 orang nih yg join</p>
      <button type="submit">Ikutan 🙌</button>
      <p>(Pura-pura doang kok ini, ga bayar apa-apa)</p>
    </form>
  );
}
