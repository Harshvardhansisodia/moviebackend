import Movie from "../model/movieModel.js";

// Create Movie
export const create = async (req, res) => {
    try {
        const movieData = new Movie(req.body);
        if (!movieData) {
            return res.status(404).json({ msg: "Movie Data Not Found" });
        }

        const savedData = await movieData.save();
        res.status(200).json(savedData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Movies
export const getAll = async (req, res) => {
    try {
        const movieData = await Movie.find();
        if (!movieData) {
            return res.status(404).json({ msg: "Movies Not Found" });
        }

        res.status(200).json(movieData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Movie
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const movieExist = await Movie.findById(id);

        if (!movieExist) {
            return res.status(404).json({ msg: "Movie Not Found!" });
        }

        res.status(200).json(movieExist);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Movie
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const movieExist = await Movie.findById(id);
        if (!movieExist) {
            return res.status(404).json({ msg: "Movie Not Found!" });
        }

        const updatedData = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Movie
export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movieExist = await Movie.findById(id);
        if (!movieExist) {
            return res.status(404).json({ msg: "Movie Not Found!" });
        }

        await Movie.findByIdAndDelete(id);
        res.status(200).json({ msg: "Movie Deleted Successfully!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
