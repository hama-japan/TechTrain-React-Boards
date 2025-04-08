import { useState, useEffect } from 'react';

interface Thread {
  id: number;
  title: string;
  content: string;
}

const TestThreads = () => {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`);

        if (!response.ok) {
          throw new Error('データの取得に失敗しました');
        }

        const data: Thread[] = await response.json();

        if (data.length < 10) {
          setHasMore(false);
        }

        setThreads(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchThreads();
  }, [offset]);

  const loadMoreThreads = () => {
    if (hasMore) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  }

  if (loading && offset === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <header>
        <h1>スレッド一覧</h1>
      </header>
      <div id='card'>
        {threads.map((thread) => (
          <div id='card' key={thread.id}>
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
          </div>
        ))}
      </div>
      {hasMore && (
        <button onClick={loadMoreThreads} disabled={loading}>
          {loading ? 'Loading more...' : 'Next 10 Threads'}
        </button>
      )}
    </div>
  );
};

export default TestThreads;