# Design System Documentation

A comprehensive design system built with React, TypeScript, and Tailwind CSS for the Next.js 15 Base project.

## 🎨 Overview

This design system provides a collection of reusable UI components that follow consistent design patterns and accessibility standards. All components are built with TypeScript for type safety and use Tailwind CSS for styling.

## 📦 Installation

The design system is already included in this project. Required dependencies:

```bash
npm install clsx tailwind-merge
```

## 🚀 Quick Start

### Import Components

```tsx
import { Button, Card, Input, Badge } from '@/components/ui';
```

### Basic Usage

```tsx
import { Button, Card, Container } from '@/components/ui';

function MyComponent() {
  return (
    <Container>
      <Card padding="lg">
        <Button variant="primary" size="lg">
          Click me
        </Button>
      </Card>
    </Container>
  );
}
```

## 🧩 Components

### Core Components

#### Button
A versatile button component with multiple variants, sizes, and states.

```tsx
<Button variant="primary" size="md" loading>
  Submit
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `fullWidth`: boolean

#### Input
Form input component with various styles and states.

```tsx
<Input 
  label="Email" 
  placeholder="Enter your email"
  error={hasError}
  helperText="Please enter a valid email"
/>
```

**Props:**
- `variant`: 'outline' | 'filled' | 'unstyled'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `error`: boolean
- `label`: string
- `helperText`: string
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `fullWidth`: boolean

#### Card
Container component for grouping related content.

```tsx
<Card padding="lg" shadow="lg" hover>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `shadow`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `border`: boolean
- `hover`: boolean

#### Badge
Small component for displaying status, labels, or counts.

```tsx
<Badge variant="success" size="md" rounded>
  Active
</Badge>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `rounded`: boolean

#### Avatar
User profile image component with fallback support.

```tsx
<Avatar 
  src="/path/to/image.jpg" 
  alt="John Doe"
  size="lg"
  fallback="👤"
/>
```

**Props:**
- `src`: string
- `alt`: string
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `fallback`: ReactNode
- `rounded`: boolean

#### Modal
Overlay dialog component for important content.

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  size="lg"
>
  <p>Are you sure you want to proceed?</p>
  <Button onClick={() => setIsOpen(false)}>Confirm</Button>
</Modal>
```

**Props:**
- `isOpen`: boolean
- `onClose`: () => void
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `closeOnOverlayClick`: boolean
- `closeOnEscape`: boolean

#### Alert
Notification component for displaying messages to users.

```tsx
<Alert 
  variant="success" 
  title="Success!"
  closable
  onClose={() => setShowAlert(false)}
>
  Your action was completed successfully.
</Alert>
```

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'error'
- `title`: string
- `closable`: boolean
- `onClose`: () => void

### Layout Components

#### Container
Responsive container for consistent page layouts.

```tsx
<Container maxWidth="lg" padding="md" center>
  <h1>Page Content</h1>
</Container>
```

**Props:**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `center`: boolean

#### Grid
CSS Grid layout component with responsive columns.

```tsx
<Grid cols={3} gap="lg" responsive>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

**Props:**
- `cols`: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
- `gap`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `responsive`: boolean

#### Flex
Flexbox layout component with alignment options.

```tsx
<Flex direction="row" justify="between" align="center" gap="md">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Flex>
```

**Props:**
- `direction`: 'row' | 'column' | 'row-reverse' | 'column-reverse'
- `justify`: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
- `align`: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
- `wrap`: 'nowrap' | 'wrap' | 'wrap-reverse'
- `gap`: 'none' | 'sm' | 'md' | 'lg' | 'xl'

### Utility Components

#### Divider
Horizontal or vertical divider line.

```tsx
<Divider orientation="horizontal" variant="dashed" size="md">
  Section Title
</Divider>
```

**Props:**
- `orientation`: 'horizontal' | 'vertical'
- `variant`: 'solid' | 'dashed' | 'dotted'
- `size`: 'sm' | 'md' | 'lg'

#### Spinner
Loading indicator component.

```tsx
<Spinner size="lg" color="primary" thickness={3} speed={1} />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'white'
- `thickness`: number
- `speed`: number

#### Progress
Progress bar component with linear and circular variants.

```tsx
<Progress 
  value={75} 
  max={100} 
  size="md" 
  variant="line" 
  color="primary"
  showValue
/>
```

**Props:**
- `value`: number
- `max`: number
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'line' | 'circle'
- `color`: 'primary' | 'success' | 'warning' | 'error'
- `showValue`: boolean

## 🎨 Design Tokens

### Colors

The design system includes a comprehensive color palette:

- **Primary**: Blue shades for main actions and branding
- **Secondary**: Gray shades for secondary content
- **Success**: Green shades for positive states
- **Warning**: Yellow/Orange shades for caution states
- **Error**: Red shades for error states

### Typography

- **Font Family**: Inter (sans-serif), Georgia (serif), JetBrains Mono (monospace)
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- **Font Weights**: thin, extralight, light, normal, medium, semibold, bold, extrabold, black

### Spacing

Consistent spacing scale: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Border Radius

- **none**: 0px
- **sm**: 0.125rem
- **base**: 0.25rem
- **md**: 0.375rem
- **lg**: 0.5rem
- **xl**: 0.75rem
- **2xl**: 1rem
- **3xl**: 1.5rem
- **full**: 9999px

### Shadows

- **sm**: Subtle shadow
- **base**: Default shadow
- **md**: Medium shadow
- **lg**: Large shadow
- **xl**: Extra large shadow
- **2xl**: Maximum shadow
- **inner**: Inset shadow
- **none**: No shadow

## 🔧 Utilities

### cn() Function

The `cn()` utility function combines class names using `clsx` and `tailwind-merge`:

```tsx
import { cn } from '@/helpers/utils/cn';

const classes = cn(
  'base-class',
  condition && 'conditional-class',
  'override-class'
);
```

## 📱 Responsive Design

All components are built with responsive design in mind:

- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Grid components** automatically adapt to screen size
- **Typography** scales appropriately

## ♿ Accessibility

Components include proper accessibility features:

- **ARIA labels** and roles
- **Keyboard navigation** support
- **Focus management** in modals
- **Screen reader** friendly
- **Color contrast** compliance

## 🎯 Best Practices

1. **Consistent Spacing**: Use the design system's spacing scale
2. **Semantic Colors**: Use color variants for their intended purpose
3. **Responsive Design**: Always consider mobile and tablet layouts
4. **Accessibility**: Include proper ARIA attributes and keyboard support
5. **Type Safety**: Leverage TypeScript for component props

## 🚀 Getting Started

1. Visit `/design-system` to see all components in action
2. Import components from `@/components/ui`
3. Use the provided props to customize components
4. Follow the design tokens for consistent styling

## 📚 Examples

See the design system showcase page at `/design-system` for comprehensive examples of all components and their variations.

## 🤝 Contributing

When adding new components:

1. Create the component in `src/components/ui/`
2. Add TypeScript interfaces in `src/interfaces/components.ts`
3. Export from `src/components/ui/index.ts`
4. Add examples to the design system showcase page
5. Update this documentation

---

For more information, check out the design system showcase at `/design-system`.
