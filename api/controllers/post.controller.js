import Post from "../models/post.models.js";

export const allPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post);

    }catch(err){
        console.error(`Error: ${err.message}`);
    }
};

export const addPost = async (req, res) => {
    try {
        const { title, severity, status, author, affectedSectors, countries, tags, description, technicalDetails, iocs, impactAssessment, mitigationSteps, relatedIncidents, references } = req.body;

        const newPost = new Post({
            title,
            severity,
            status,
            author,
            affectedSectors,
            countries,
            tags,
            description,
            technicalDetails,
            iocs,
            impactAssessment,
            mitigationSteps,
            relatedIncidents,
            references
        });

        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        console.error(`Error: ${err.message}`);
    }
};