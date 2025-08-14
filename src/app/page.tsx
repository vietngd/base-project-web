"use client";
import { Button, Card, Container, Flex, Grid } from "@/components/ui";
import { formatCurrency } from "@/helpers/utils/format";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <Container className='py-12'>
        <Flex direction='column' align='center' className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>Next.js 15 Base</h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl'>
            A modern Next.js application with a comprehensive design system built with React,
            TypeScript, and Tailwind CSS.
          </p>
          <p className='text-lg text-gray-700 mb-8'>Giá demo: {formatCurrency(1234567)}</p>

          <Flex gap='md' wrap='wrap'>
            <Link href='/design-system'>
              <Button size='lg' leftIcon={<span>🎨</span>}>
                View Design System
              </Button>
            </Link>
            <Button variant='outline' size='lg' leftIcon={<span>📚</span>}>
              Documentation
            </Button>
          </Flex>
        </Flex>

        <Grid cols={3} gap='lg'>
          <Card padding='lg' hover>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🚀</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Fast Development</h3>
              <p className='text-gray-600'>
                Built with Next.js 15 and React 19 for optimal performance and developer experience.
              </p>
            </div>
          </Card>

          <Card padding='lg' hover>
            <div className='text-center'>
              <div className='text-4xl mb-4'>🎨</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Design System</h3>
              <p className='text-gray-600'>
                Comprehensive collection of reusable UI components with consistent styling and
                behavior.
              </p>
            </div>
          </Card>

          <Card padding='lg' hover>
            <div className='text-center'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Type Safe</h3>
              <p className='text-gray-600'>
                Full TypeScript support with proper type definitions for all components and
                utilities.
              </p>
            </div>
          </Card>
        </Grid>
      </Container>
    </main>
  );
}
