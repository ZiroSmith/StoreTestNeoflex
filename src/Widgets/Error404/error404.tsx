import { page } from '../../Shared/Constants/navigation';

import {
  ErrorPageWrapper, ErrorTextContainer, ErrorText, ErrorLink,
} from './style';

function Error404() {
  return (
    <ErrorPageWrapper>
      <ErrorTextContainer>
        <ErrorText>
          Такой страницы пока не существует. Сейчас проведем Вас на
          <ErrorLink to={page.mainPage}> &nbsp;ГЛАВНУЮ</ErrorLink>
        </ErrorText>
      </ErrorTextContainer>

    </ErrorPageWrapper>
  );
}

export default Error404;
