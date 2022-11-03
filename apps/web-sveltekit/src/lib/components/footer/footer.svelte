<script lang="ts">
	import type { Footer } from 'common/src/types/sanity/allPages/footer';

	export let footerData: Footer;
</script>

<footer class="fixed bottom-0 w-full bg-slate-500 p-4 px-2 text-white">
	<p>{footerData.footerText}</p>
</footer>
