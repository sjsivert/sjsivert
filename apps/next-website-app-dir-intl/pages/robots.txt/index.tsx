import { getBaseUrl } from "@/lib/utils/url";
import { GetServerSideProps } from "next";

const Robots: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const body = `# *
User-agent: *
Disallow: *
	
# Host
Host: ${getBaseUrl()}

# Sitemaps
Sitemap: ${getBaseUrl()}/sitemap.xml`;

	res.setHeader("Cache-Control", "max-age=0, s-maxage=3600");
	res.setHeader("Content-Type", "text/plain");
	res.write(body);
	res.end();

	return {
		props: {},
	};
};

export default Robots;
