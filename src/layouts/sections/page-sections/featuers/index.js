
import BaseLayout from "layouts/sections/components/BaseLayout";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <div>Features</div>;
    </BaseLayout>
  );
}

export default Features;
