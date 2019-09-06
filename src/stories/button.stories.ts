import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonModule, ButtonComponent } from 'button';
import { Welcome } from '@storybook/angular/demo';

storiesOf('button', module)
// .addDecorator(
//     moduleMetadata({
//     //     declarations: [ButtonComponent],
//       imports: [ButtonModule]
//     })
//   )
  .add('standard', () => ({
    component: Welcome,
    props: {},
  }))
  .add('basic', () => ({
    component: ButtonComponent,
    // props: {
    //   text: 'hello'
    // }
  }))
//   .add('disabled', () => ({
//     component: ButtonComponent,
//     props: {
//       text: 'disabled',
//       disabled: true
//     }
//   }));