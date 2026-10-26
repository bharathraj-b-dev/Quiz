# Java MCQ Quiz

A static Java multiple-choice quiz website.

## Run locally

Start the optional Python server:

```powershell
python server.py
```

Then open <http://localhost:8000>. You can also open `index.html` directly in
a browser.

## Publish with GitHub Pages

GitHub Pages serves this site as static files; it does not run `server.py`.

1. Create an empty repository on GitHub. Do not initialize it with a README,
   license, or `.gitignore`.
2. From this project folder, connect and push the `main` branch:

   ```powershell
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Open the URL shown on the Pages settings page after deployment completes.

The `index.html` and `questions.js` files must remain in the repository root
for the site to load correctly.
