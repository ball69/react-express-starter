import { useBreadcrumbs } from "../store/breadcrumbs";
import { useEffect } from "react";
import { usePageLoading } from "../store/loading";

function Page() {
	const { setTitle, setBreadcrumbs } = useBreadcrumbs((state) => state);
	const { setLoading } = usePageLoading((state) => state);
	useEffect(() => {
		setLoading(true);
		setBreadcrumbs([
			{
				name: "หน้าตัวอย่าง",
				path: null,
			},
		]);
		setTitle("หน้าตัวอย่าง");
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [setLoading, setTitle]);

	return <h1>Page</h1>;
}

export default Page;
