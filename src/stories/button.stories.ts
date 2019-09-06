import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ButtonModule } from '../../projects/button/src/lib/button.module';
import { ButtonComponent } from '../../projects/button/src/lib/button.component'
import { Welcome } from '@storybook/angular/demo';

storiesOf('button', module)
.addDecorator(
    moduleMetadata({
      imports: [ButtonModule]
    })
  )
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