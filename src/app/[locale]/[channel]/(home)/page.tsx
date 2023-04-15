import { ArrowPathIcon } from '@heroicons/react/24/solid';

export default function HomePage() {
  return (
    <main className="container mx-auto my-auto w-full max-w-7xl h-full max-h-screen">
      <h1 className="mt-12 flex flex-row justify-center items-center">
        <span>
          <ArrowPathIcon className="w-6 h-6 mr-2" />
        </span>
        <span className="text-3xl text-secondary">
          Home Page Under Construction
        </span>
      </h1>
    </main>
  );
}
