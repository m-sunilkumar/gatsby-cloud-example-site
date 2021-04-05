import { graphql } from "gatsby";
import React from "react";

export default function ThemePage(props) {
  const { data } = props;
  console.log("propsssssssss", props);
  return (
    <div>
      <h1>Hello, from the theme!</h1>
      {/* {data.allContentfulNavbarThemeItems.nodes.map(
        (item) => item.menuItemText + " ,"
      )} */}
    </div>
  );
}

// export const query = graphql`
//   query {
//     allContentfulNavbarThemeItems(filter: { node_locale: { eq: "en-US" } }) {
//       nodes {
//         checkLoginStatus
//         hasSubMenu
//         location
//         menuItemText
//         subMenuColumns
//         subMenuItems {
//           id
//           sectionId
//           subTitle
//           subMenuLinks {
//             id
//             name
//             route
//           }
//         }
//       }
//     }
//   }
// `;
