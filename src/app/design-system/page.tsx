"use client";

import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  Badge,
  Avatar,
  Modal,
  Alert,
  Container,
  Grid,
  Flex,
  Divider,
  Spinner,
  Progress,
} from "@/components/ui";
import { useHydration } from "@/hooks/useHydration";

const DesignSystemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const mounted = useHydration();

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <Container className='py-8'>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>Design System</h1>
        <p className='text-lg text-gray-600'>
          A comprehensive collection of reusable UI components built with React, TypeScript, and
          Tailwind CSS.
        </p>
      </div>

      {/* Buttons Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Buttons</h2>
        <Card padding='lg'>
          <Grid cols={2} gap='lg'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Variants</h3>
              <Flex direction='column' gap='md'>
                <Button variant='primary'>Primary Button</Button>
                <Button variant='secondary'>Secondary Button</Button>
                <Button variant='outline'>Outline Button</Button>
                <Button variant='ghost'>Ghost Button</Button>
                <Button variant='destructive'>Destructive Button</Button>
              </Flex>
            </div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Sizes</h3>
              <Flex direction='column' gap='md'>
                <Button size='sm'>Small Button</Button>
                <Button size='md'>Medium Button</Button>
                <Button size='lg'>Large Button</Button>
                <Button size='xl'>Extra Large Button</Button>
              </Flex>
            </div>
          </Grid>
          <Divider className='my-6' />
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>States</h3>
            <Flex gap='md' wrap='wrap'>
              <Button loading>Loading Button</Button>
              <Button disabled>Disabled Button</Button>
              <Button leftIcon={<span>🚀</span>}>With Left Icon</Button>
              <Button rightIcon={<span>→</span>}>With Right Icon</Button>
              <Button fullWidth>Full Width Button</Button>
            </Flex>
          </div>
        </Card>
      </section>

      {/* Inputs Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Inputs</h2>
        <Card padding='lg'>
          <Grid cols={2} gap='lg'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Variants</h3>
              <Flex direction='column' gap='md'>
                <Input placeholder='Outline input' />
                <Input variant='filled' placeholder='Filled input' />
                <Input variant='unstyled' placeholder='Unstyled input' />
              </Flex>
            </div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Sizes</h3>
              <Flex direction='column' gap='md'>
                <Input size='sm' placeholder='Small input' />
                <Input size='md' placeholder='Medium input' />
                <Input size='lg' placeholder='Large input' />
                <Input size='xl' placeholder='Extra large input' />
              </Flex>
            </div>
          </Grid>
          <Divider className='my-6' />
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>States & Features</h3>
            <Grid cols={2} gap='lg'>
              <Flex direction='column' gap='md'>
                <Input label='With Label' placeholder='Input with label' />
                <Input error helperText='This field is required' placeholder='Error state' />
                <Input leftIcon={<span>🔍</span>} placeholder='With left icon' />
                <Input rightIcon={<span>📧</span>} placeholder='With right icon' />
              </Flex>
              <Flex direction='column' gap='md'>
                <Input fullWidth placeholder='Full width input' />
                <Input disabled placeholder='Disabled input' />
                <Input type='password' placeholder='Password input' />
                <Input type='email' placeholder='Email input' />
              </Flex>
            </Grid>
          </div>
        </Card>
      </section>

      {/* Cards Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Cards</h2>
        <Grid cols={3} gap='lg'>
          <Card padding='md' shadow='sm'>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>Small Shadow</h3>
            <p className='text-gray-600'>Card with small shadow and medium padding.</p>
          </Card>
          <Card padding='lg' shadow='lg' hover>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>Large Shadow + Hover</h3>
            <p className='text-gray-600'>
              Card with large shadow, hover effect, and large padding.
            </p>
          </Card>
          <Card padding='xl' shadow='2xl' border>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>2XL Shadow + Border</h3>
            <p className='text-gray-600'>Card with 2XL shadow, border, and extra large padding.</p>
          </Card>
        </Grid>
      </section>

      {/* Badges Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Badges</h2>
        <Card padding='lg'>
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Variants</h3>
            <Flex gap='md' wrap='wrap'>
              <Badge variant='primary'>Primary</Badge>
              <Badge variant='secondary'>Secondary</Badge>
              <Badge variant='success'>Success</Badge>
              <Badge variant='warning'>Warning</Badge>
              <Badge variant='error'>Error</Badge>
              <Badge variant='outline'>Outline</Badge>
            </Flex>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Sizes</h3>
            <Flex gap='md' wrap='wrap'>
              <Badge size='sm'>Small</Badge>
              <Badge size='md'>Medium</Badge>
              <Badge size='lg'>Large</Badge>
            </Flex>
          </div>
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Rounded</h3>
            <Flex gap='md' wrap='wrap'>
              <Badge rounded>Rounded Primary</Badge>
              <Badge variant='success' rounded>
                Rounded Success
              </Badge>
              <Badge variant='warning' rounded>
                Rounded Warning
              </Badge>
            </Flex>
          </div>
        </Card>
      </section>

      {/* Avatars Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Avatars</h2>
        <Card padding='lg'>
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Sizes</h3>
            <Flex gap='md' align='center'>
              <Avatar size='xs' alt='John Doe' />
              <Avatar size='sm' alt='John Doe' />
              <Avatar size='md' alt='John Doe' />
              <Avatar size='lg' alt='John Doe' />
              <Avatar size='xl' alt='John Doe' />
              <Avatar size='2xl' alt='John Doe' />
            </Flex>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>With Images</h3>
            <Flex gap='md' align='center'>
              <Avatar
                size='lg'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                alt='User'
              />
              <Avatar
                size='lg'
                src='https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
                alt='User'
              />
            </Flex>
          </div>
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Fallbacks</h3>
            <Flex gap='md' align='center'>
              <Avatar size='lg' alt='John Doe' />
              <Avatar size='lg' fallback='👤' />
              <Avatar size='lg' fallback='🚀' />
            </Flex>
          </div>
        </Card>
      </section>

      {/* Alerts Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Alerts</h2>
        <Card padding='lg'>
          <Flex direction='column' gap='md'>
            <Alert variant='info' title='Information'>
              This is an informational alert with a title.
            </Alert>
            <Alert variant='success' title='Success'>
              Your action was completed successfully!
            </Alert>
            <Alert variant='warning' title='Warning'>
              Please review your input before proceeding.
            </Alert>
            <Alert variant='error' title='Error'>
              Something went wrong. Please try again.
            </Alert>
            {mounted && showAlert && (
              <Alert variant='info' title='Closable Alert' closable onClose={handleCloseAlert}>
                This alert can be closed by clicking the X button.
              </Alert>
            )}
          </Flex>
        </Card>
      </section>

      {/* Progress & Spinner Section */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Progress & Loading</h2>
        <Card padding='lg'>
          <Grid cols={2} gap='lg'>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Progress Bars</h3>
              <Flex direction='column' gap='md'>
                <div>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Small</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} size='sm' />
                </div>
                <div>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Medium</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} size='md' />
                </div>
                <div>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Large</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} size='lg' />
                </div>
              </Flex>
            </div>
            <div>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Spinners</h3>
              <Flex gap='md' align='center'>
                <div className='text-center'>
                  <Spinner size='sm' />
                  <p className='text-xs text-gray-600 mt-1'>Small</p>
                </div>
                <div className='text-center'>
                  <Spinner size='md' />
                  <p className='text-xs text-gray-600 mt-1'>Medium</p>
                </div>
                <div className='text-center'>
                  <Spinner size='lg' />
                  <p className='text-xs text-gray-600 mt-1'>Large</p>
                </div>
                <div className='text-center'>
                  <Spinner size='xl' />
                  <p className='text-xs text-gray-600 mt-1'>XL</p>
                </div>
              </Flex>
            </div>
          </Grid>
          <Divider className='my-6' />
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Progress Colors</h3>
            <Flex direction='column' gap='md'>
              <Progress value={80} color='primary' showValue />
              <Progress value={65} color='success' showValue />
              <Progress value={45} color='warning' showValue />
              <Progress value={30} color='error' showValue />
            </Flex>
          </div>
        </Card>
      </section>

      {/* Modal Demo */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Modal</h2>
        <Card padding='lg'>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        </Card>
      </section>

      {/* Layout Components */}
      <section className='mb-12'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Layout Components</h2>
        <Card padding='lg'>
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Grid System</h3>
            <Grid cols={4} gap='md'>
              <div className='bg-blue-100 p-4 rounded text-center'>1</div>
              <div className='bg-blue-100 p-4 rounded text-center'>2</div>
              <div className='bg-blue-100 p-4 rounded text-center'>3</div>
              <div className='bg-blue-100 p-4 rounded text-center'>4</div>
            </Grid>
          </div>
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Flex Layout</h3>
            <Flex justify='between' align='center' className='bg-gray-100 p-4 rounded'>
              <span>Left Content</span>
              <span>Center Content</span>
              <span>Right Content</span>
            </Flex>
          </div>
        </Card>
      </section>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Design System Modal'
        size='lg'
      >
        <div className='space-y-4'>
          <p className='text-gray-600'>
            This is a modal component from the design system. It includes a backdrop, keyboard
            navigation (ESC to close), and click outside to close functionality.
          </p>
          <Flex gap='md'>
            <Button onClick={() => setIsModalOpen(false)}>Close Modal</Button>
            <Button variant='outline' onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
          </Flex>
        </div>
      </Modal>
    </Container>
  );
};

export default DesignSystemPage;
