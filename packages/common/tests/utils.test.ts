import { filterDataToSingleItem } from "../src/utils/sanity";
import { stripLeadingAndTrailingSlashes, stripLeadingSlash, stripTrailingSlash } from "../src/utils/stringUtils";
import { getFullUrlFromDomain } from "../src/utils/url";

describe("stringUtils", () => {
	const testPath = "/test/hest/";

	describe("stripLeadingSlash()", () => {
		test("should strip a leading slash", () => {
			expect(stripLeadingSlash(testPath)).toBe("test/hest/");
		});
	});

	describe("stripTrailingSlash()", () => {
		test("should strip a trailing slash", () => {
			expect(stripTrailingSlash(testPath)).toBe("/test/hest");
		});
	});
	describe("stripLeadingAndTrailingSlashes()", () => {
		test("should strip leading and trailing slashes", () => {
			expect(stripLeadingAndTrailingSlashes(testPath)).toBe("test/hest");
		});
	});
});

describe("urlUtils", () => {
	describe("getFullUrlFromDomain()", () => {
		test("should return a http localhost url", () => {
			expect(getFullUrlFromDomain("localhost:3000/a/path")).toBe("http://localhost:3000/a/path");
		});
		test("should return a https remote host url", () => {
			expect(getFullUrlFromDomain("vg.no/articles/blah")).toBe("https://vg.no/articles/blah");
		});
	});
});

describe("SanityUtils", () => {
	describe("filterDataToSingleItem()", () => {
		const baseId = "my-id";
		const draftId = `drafts.${baseId}`;
		const testData: Array<any> = [
			{
				_id: baseId,
			},
			{ _id: draftId },
		];
		test("should return the non draft item", () => {
			expect(filterDataToSingleItem(testData, false)?._id).toBe(baseId);
		});
		test("should return the draft item", () => {
			expect(filterDataToSingleItem(testData, true)?._id).toBe(draftId);
		});
		test("should return null since there is only a draft and preview is false", () => {
			const testOnlyDrafts: Array<any> = [{ _id: draftId }];
			expect(filterDataToSingleItem(testOnlyDrafts, false)).toBeNull();
		});
		test("should return the item since there is only a draft and preview is true", () => {
			const testOnlyDrafts: Array<any> = [{ _id: draftId }];
			expect(filterDataToSingleItem(testOnlyDrafts, true)?._id).toBe(draftId);
		});
		test("should return the item since there is only a published document and preview is false/true", () => {
			const testOnlyDrafts: Array<any> = [{ _id: baseId }];
			expect(filterDataToSingleItem(testOnlyDrafts, false)?._id).toBe(baseId);
			expect(filterDataToSingleItem(testOnlyDrafts, true)?._id).toBe(baseId);
		});
		test("if the data is not an array, preview is false and the item is a draft, it should return null", () => {
			const testOnlyDraft: any = { _id: draftId };
			expect(filterDataToSingleItem(testOnlyDraft, false)).toBeNull();
		});
		test("if the data is not an array, preview is true/false and the item is published, it should return null", () => {
			const testOnlyDraft: any = { _id: baseId };
			expect(filterDataToSingleItem(testOnlyDraft, false)).toBeTruthy();
			expect(filterDataToSingleItem(testOnlyDraft, true)).toBeTruthy();
		});
		test("preview is false, two documents, one draft the other published, return the published one", () => {
			const testData = [{ _id: draftId }, { _id: baseId }];
			expect(filterDataToSingleItem(testData, false)?._id).toBe(baseId);
		});
	});
});

export {};
