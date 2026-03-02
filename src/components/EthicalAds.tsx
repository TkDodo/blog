export default function EthicalAds() {
  return (
    <div className="not-prose mt-4 md:mt-[1.125rem] flex flex-col items-center md:items-start">
      <div
        id="blog-ad"
        data-ea-publisher="tkdodoeu"
        className="flat adaptive mx-auto md:mx-0"
        data-ea-type="image"
        data-ea-style="stickybox"
        data-ea-manual="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
  var scriptId = "ethical-ads";
  var existingScript = document.getElementById(scriptId);
  if (existingScript && window.ethicalads && typeof window.ethicalads.reload === "function") {
    window.ethicalads.reload();
    return;
  }
  if (!existingScript) {
    var script = document.createElement("script");
    script.async = true;
    script.id = scriptId;
    script.src = "https://media.ethicalads.io/media/client/ethicalads.min.js";
    script.addEventListener("load", function () {
      if (window.ethicalads && typeof window.ethicalads.load === "function") {
        window.ethicalads.load();
      }
    });
    document.head.appendChild(script);
  }
})();`,
        }}
      />
    </div>
  );
}
