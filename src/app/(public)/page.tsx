import { Button, Card, CardContent, Typography } from "@mui/material";
import { formatCurrency } from "@/utils/format";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-4">
          <Typography variant="h5" className="!font-bold">Next.js 15 Base</Typography>
          <p className="text-gray-600">Giá demo: {formatCurrency(1234567)}</p>
          <Button variant="contained">MUI Button</Button>
        </CardContent>
      </Card>
    </main>
  );
}
