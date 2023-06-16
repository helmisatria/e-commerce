import type { APIRoute } from "astro";
import axios from "axios";

export const post: APIRoute = async ({ request }) => {
  // const body = await request.json();

  const response = await axios.post(
    "https://api.xendit.co/v2/invoices",
    {
      external_id: "invoice-{{$timestamp}}",
      amount: 8000,
      payer_email: "satriahelmi@gmail.com",
      description: "Seru-seruan live youtube",
    },
    {
      auth: {
        username: import.meta.env.XENDIT_API_KEY,
        password: "",
      },
    }
  );

  const invoiceData = response.data as Invoice;

  return new Response(
    JSON.stringify({
      data: invoiceData,
    }),
    { status: 400 }
  );
};
