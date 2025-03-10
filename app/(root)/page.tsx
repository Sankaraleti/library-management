import BookList from "@/components/Booklist";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};
export default Home;
