import * as React from 'react';
import * as ReactHookForm from 'react-hook-form';

import * as Presenter from '~client/app/application/businesses/todos/presenter';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  create: () => void;
  createFormHandler: ReactHookForm.UseFormReturn<Presenter.CreteInputValues>;
};

// ------------------------------------
// Component
// ------------------------------------

const CreateTodoForm = (props: Props) => (
  <>
    <Components.TextField.Component
      inputProps={{
        ...props.createFormHandler.register('description'),
      }}
    />
    <button onClick={props.create} type="submit">
      create
    </button>
  </>
);

export const Component = React.memo(CreateTodoForm);
