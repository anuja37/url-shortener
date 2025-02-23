const Url = require('../models/Url');

exports.shortenUrl = async (req, res) => {
  const { fullUrl } = req.body;
  try {
    const url = await Url.create({ fullUrl });
    res.status(201).json(url);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  try {
    const url = await Url.findOneAndUpdate(
      { shortUrl },
      { $inc: { clicks: 1 } },
      { new: true }
    );
    if (url) {
      res.redirect(url.fullUrl);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};