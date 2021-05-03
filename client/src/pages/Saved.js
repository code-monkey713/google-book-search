import { SavedCard } from '../components/SavedCard';

export const Saved = () => {
  return (
    <div className="saved-wrap">
      <div style={{ margin: 10 }}>
        <p className="grayout">Your saved books are listed below!</p>
      </div>
      <SavedCard btnView="View" btnDelete="Delete" />
    </div>
  );
};
