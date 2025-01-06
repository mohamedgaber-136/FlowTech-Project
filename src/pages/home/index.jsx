// Importing necessary components for the Home page
import MetaComponent from "../../compontents/MetaComponent"; // Component to manage metadata (title and description) for the page
import TableData from "../../compontents/TableData"; // Component that displays employee data in a table format

export const Home = () => {
  // Metadata object containing title and description for the page
  const metaData = {
    title: 'FlowTech Dashboard - Home', // The title to be displayed on the page (and in the browser tab)
    description: 'Display Employees data' // The description for the page (usually used for SEO or previews)
  };

  return (
    <div>
      {/* Rendering the MetaComponent with the provided metaData for title and description */}
      <MetaComponent meta={metaData} />
      
      {/* Rendering the TableData component which will display employee data in a table */}
      <TableData />
    </div>
  );
};
