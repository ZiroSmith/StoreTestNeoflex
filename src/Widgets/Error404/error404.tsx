import { page } from '../../Shared/Constants/navigation';

import {
  ErrorPageWrapper, ErrorTextContainer, ErrorText, ErrorLink, ErrorImg,
} from './style';

function Error404() {
  return (
    <ErrorPageWrapper>
      <ErrorImg />
      <ErrorTextContainer>
        <ErrorText>
          Такой страницы пока не существует.
          <ErrorLink to={page.mainPage}> &nbsp;Вернуться на ГЛАВНУЮ</ErrorLink>
        </ErrorText>
      </ErrorTextContainer>

    </ErrorPageWrapper>
  );
}

export default Error404;
