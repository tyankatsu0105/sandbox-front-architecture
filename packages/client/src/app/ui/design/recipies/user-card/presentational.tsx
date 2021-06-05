import * as React from 'react';
import styled from 'styled-components';

import * as Entity from '~client/app/application/businesses/user/entity';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  books: Entity.Book[];
  movies: Entity.Music[];
  musics: Entity.Movie[];
  user: Entity.User;
};

// ------------------------------------
// Component
// ------------------------------------

const UserCard = (props: Props) => (
  <StyledWrap>
    <Components.Card.Component
      body={renderBody({
        books: props.books,
        movies: props.movies,
        musics: props.musics,
        user: props.user,
      })}
      footer={renderFooter({ user: props.user })}
      header={renderHeader({ user: props.user })}
    />
  </StyledWrap>
);

export const Component = React.memo(UserCard);

// ------------------------------------
// renderHeader
// ------------------------------------

type RenderHeaderProps = {
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const renderHeader = (props: RenderHeaderProps) => <div>{props.user.name}</div>;

// ------------------------------------
// renderBody
// ------------------------------------

type RenderBodyProps = {
  books: Props['books'];
  movies: Props['movies'];
  musics: Props['musics'];
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const renderBody = (props: RenderBodyProps) => (
  <div>
    <ul>
      <li>誕生日{props.user.birthDay}</li>
      <li>
        <ul>
          book
          {props.books.map((book) => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </li>
      <li>
        <ul>
          movie
          {props.movies.map((movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>
      </li>
      <li>
        <ul>
          music
          {props.musics.map((music) => (
            <li key={music.id}>{music.name}</li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
);

// ------------------------------------
// renderFooter
// ------------------------------------

type RenderFooterProps = {
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const renderFooter = (props: RenderFooterProps) => (
  <div>ユーザー作成日{props.user.createdAt}</div>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  padding: 20px;
`;
