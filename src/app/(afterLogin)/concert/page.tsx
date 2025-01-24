import CategoryTitle from './_component/CategoryTitle';
import CategoryList from './_component/CategoryList';
import SearchConcert from './_component/SearchConcert';

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center">
      <SearchConcert />
      <CategoryTitle />
      <CategoryList />
    </div>
  );
}
