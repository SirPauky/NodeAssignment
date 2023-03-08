var arr = new Array();
const router = async function (req, res) {
  if (req.url === "/api/my_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/name
  if (req.url === "/api/save_name"/* && req.method === "POST"*/) {
    try {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(
        "What would you like to add to your array please?!",
        (new_name) => {
          console.log(`You have successfully added ${new_name} to the array, congratulations!`);
          arr.push(new_name);
          readline.close();
        }
      );

      let container = "Please ensure you add the new name via the terminal";
      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(container));
    } catch (error) {
      console.log(error);
    }
  }

  //PUT: /api/blogs/:id
  //   if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "PUT") {
  //     try {
  //       // extract id from url
  //       const id = req.url.split("/")[3];

  //       let body = "";

  //       //listen for data event
  //       req.on("data", (chunk) => {
  //         body += chunk.toString();
  //       });

  //       req.on("end", async () => {
  //         let updatedBlog = await Blog.findByIdAndUpdate(id, JSON.parse(body), {
  //           new: true,
  //         });

  //         // set the status code and content-type
  //         res.writeHead(200, { "Content-Type": "application/json" });
  //         //send response
  //         res.end(JSON.stringify(updatedBlog));
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   // DELETE: /api/blogs/:id
  //   if (req.url.match(/\/api\/blogs\/([0-9]+)/) && req.method === "DELETE") {
  //     try {
  //       // extract id from url
  //       const id = req.url.split("/")[3];
  //       // delete blog
  //       await Blog.findByIdAndDelete(id);
  //       // set the status code and content-type
  //       res.writeHead(200, { "Content-Type": "application/json" });
  //       // send the message
  //       res.end(JSON.stringify({ message: "Blog deleted sucessfully" }));
  //     } catch (error) {
  //       // set the status code and content-type
  //       res.writeHead(404, { "Content-Type": "application/json" });
  //       // send the error
  //       res.end(JSON.stringify({ message: error }));
  //     }
  //   }
};

module.exports = router;
