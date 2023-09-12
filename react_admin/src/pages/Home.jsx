import { useBreadcrumbs } from "../store/breadcrumbs";
import { useEffect } from "react";
import { usePageLoading } from "../store/loading";

function Home() {
	const { setTitle, setBreadcrumbs } = useBreadcrumbs((state) => state);
	const { setLoading } = usePageLoading((state) => state);

	useEffect(() => {
		setLoading(true);
		setBreadcrumbs([
			{
				name: "หน้าแรก",
				path: null,
			},
		]);
		setTitle("หน้าแรก");
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [setLoading, setTitle]);

	return <h1>Home Page</h1>;
}

export default Home;
