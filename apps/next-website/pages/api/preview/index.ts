import { NextApiRequest, NextApiResponse } from "next";

import { serverSideEnvironmentVariables } from "@/lib/config/envVariables";

interface Params {
    sanityPreviewSecret: string;
}

export function previewHandler(req: NextApiRequest, res: NextApiResponse, params: Params) {
    // ...
    if (req.query.secret !== params.sanityPreviewSecret) {
        return res.status(401).json({ message: "Invalid token" });
    }

    const docType = req.query._type as string;
    const docId = req.query._id as string;
    const docSlug = (req.query.slug as string) || undefined;
    const docCollection = (req.query.collection as string) || undefined;

    if (!docId || !docType) {
        return res.status(401).json({ message: "You must pass a type and an id" });
    }

    res.setPreviewData({});

    // redirect to the correct page
    const path = resolvePath(docType, docId, docCollection, docSlug);

    return res.redirect(307, path);
}

// Try to get the path using the type first
// if that returns null
// the get the path by id
function resolvePath(type: string, id: string, collection?: string, slug?: string): string {
    const path = getTypePath(type, id, collection, slug);
    return path ? path : getPathForId(id);
}

// Grabs the correct path for an id
function getPathForId(_id: string): string {
    if (_id === "errorPage") {
        return "/error";
    }
    return "/";
}

// Creates the path for the page
function buildTypePath(basePath: string, id?: string, slug?: string): string {
    if (slug) {
        return `${basePath.replace(/\/$/, "")}/${slug}`;
    }
    if (id) {
        return `${basePath}/${id}`;
    }
    return basePath;
}

// Handles cases where the slug has been generated in some fancy way
function getTypePath(type: string, id: string, collection?: string, slug?: string): string | null {
    if (type === "pageArticle") {
        return buildTypePath("/", id, `articles/${collection}/${slug}`);
    }
    if (type === "pageHome" || type === "pageLandingPage") {
        return buildTypePath("/", undefined, slug);
    }
    return null;
}

/**
 * Handles previews in Sanity
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return previewHandler(req, res, {
        sanityPreviewSecret: serverSideEnvironmentVariables.sanityPreviewSecret,
    });
}
