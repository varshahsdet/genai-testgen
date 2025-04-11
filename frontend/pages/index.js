import { useState } from 'react';

export default function Home() {
  const [userStory, setUserStory] = useState('');
  const [testCases, setTestCases] = useState('');
  const [loading, setLoading] = useState(false);

  const generateTestCases = async () => {
    setLoading(true);
    const res = await fetch('https://your-backend-url.com/generate-test-cases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_story: userStory }),
    });

    const data = await res.json();
    setTestCases(data.test_cases);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🧠 GenAI Test Case Generator</h1>
      <textarea
        rows="6"
        style={{ width: '100%', padding: 12 }}
        placeholder="Enter user story..."
        value={userStory}
        onChange={(e) => setUserStory(e.target.value)}
      />
      <br />
      <button onClick={generateTestCases} disabled={loading} style={{ marginTop: 20 }}>
        {loading ? 'Generating...' : 'Generate Test Cases'}
      </button>
      <pre style={{ marginTop: 20, background: '#f2f2f2', padding: 20 }}>
        {testCases}
      </pre>
    </div>
  );
}
