import readJson from "../utils/fileReader.js";

export const getTopics = async (req, res) => {
  try {
    const search = req.query.search;
    const sort = req.query.sort;

    if (!search) {
      return res.status(400).json({ error: "Invalid query" });
    }

    // Read JSON file
    const topics = await readJson(process.env.FILE_PATH);

    let searchTopics = topics.filter(topic =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    // Sorting logic
    if (sort) {
      if (sort.toLowerCase() === "name") {
        searchTopics.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        );
      } else if (sort.toLowerCase() === "category") {
        searchTopics.sort((a, b) =>
          a.category.localeCompare(b.category, undefined, { sensitivity: "base" })
        );
      } else {
        searchTopics.sort((a, b) => a.id - b.id);
      }
    }

    return res.status(200).json({
      message: "File searched",
      searchTopics,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
