"use client";
import { Button, Card, CardContent } from "@mui/material";
import { formatCurrency } from "@/helpers/utils/format";

export default function HomePage() {
  return (
    <main className='min-h-screen flex items-center justify-center p-6'>
      <Card className='w-full max-w-md'>
        <CardContent className='flex flex-col items-center gap-4'>
          <div className='font-bold text-4xl'>Next.js 15 Base</div>
          <p className='text-gray-600'>Giá demo: {formatCurrency(1234567)}</p>
          <Button variant='contained'>MUI Button</Button>
        </CardContent>
      </Card>
    </main>
  );
}
