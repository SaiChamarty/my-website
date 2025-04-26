import './Projects.css';
import Timeline from './Timeline';

const initialData = [
  { title: 'Project A', description: 'Description A' },
  { title: 'Project B', description: 'Description B' },
  // …etc.
];


export default function Projects() {
  // mock “load more” fn—swap for real API call
  const loadMore = async () => {
    return [
      { title: 'Project C', description: '…' },
      { title: 'Project D', description: '…' }
    ];
  };

  return (
    <div className="App">
      <Timeline
        initialProjects={initialData}
        loadMoreProjects={loadMore}
      />
    </div>
  );
}
