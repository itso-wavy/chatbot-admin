import Loader from '@/components/common/Loader'
import Error from '@/components/common/Error'

interface FetchError {
  message: string;
}

/**
 * query 함수의 loading, error 처리용 컴포넌트
 */
const QueryStateHandler = ({
  isLoading,
  error,
  children
}: {
  isLoading: boolean;
  error: FetchError | null;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] items-center justify-center">
        <Error />
      </div>
    );
  }

  return <>{children}</>;
};

export default QueryStateHandler