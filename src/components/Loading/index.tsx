import ContentLoader from 'react-content-loader';

export const Loading = () => (
  <ContentLoader
    speed={2}
    width={'95%'}
    height={'300'}
    viewBox="0 0 100% 0"
    backgroundColor="#f3f3f3"
    foregroundColor="#dbdbdb"
  >
    <rect x="5%" y="0" rx="5" ry="5" width="100%" height="60" />
    <rect x="5%" y="80" rx="5" ry="5" width="100%" height="60" />
    <rect x="5%" y="160" rx="5" ry="5" width="100%" height="60" />
  </ContentLoader>
);
