import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ img, username, avatar }) => {
	return (
		<>
			<PostHeader username={username} avatar={avatar} />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={img} alt={username} />
			</Box>
			<PostFooter username={username} />
		</>
	);
};

export default FeedPost;
