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
      body={
        <Body
          books={props.books}
          movies={props.movies}
          musics={props.musics}
          user={props.user}
        />
      }
      footer={<Footer user={props.user} />}
      header={<Header user={props.user} />}
    />
  </StyledWrap>
);

export const Component = React.memo(UserCard);

// ------------------------------------
// Header
// ------------------------------------

type HeaderProps = {
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const Header = (props: HeaderProps) => <div>{props.user.name}</div>;

// ------------------------------------
// Body
// ------------------------------------

type BodyProps = {
  books: Props['books'];
  movies: Props['movies'];
  musics: Props['musics'];
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const Body = (props: BodyProps) => (
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
// Footer
// ------------------------------------

type FooterProps = {
  user: Props['user'];
};
/**
 * depends on {@link UserCard}
 */
const Footer = (props: FooterProps) => (
  <div>ユーザー作成日{props.user.createdAt}</div>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  padding: 20px;
`;
