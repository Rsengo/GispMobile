import { branch, renderNothing } from 'recompose';

const hideIfNoData = hasNoData => branch(
    hasNoData,
    renderNothing
);

export default hideIfNoData;