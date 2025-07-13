# deploy.ps1

$branch = "main"
$commitMessage = $args[0]
if (-not $commitMessage) {
    $commitMessage = "Update static site"
}

if (-not (Test-Path ".git")) {
    Write-Error "❌ This is not a Git repository. Run 'git init' first."
    exit
}

$remoteUrl = git config --get remote.origin.url
if (-not $remoteUrl) {
    Write-Error "❌ No remote repository set. Use 'git remote add origin <url>'"
    exit
}

Write-Output "📦 Adding changes..."
git add .

Write-Output "📝 Committing with message: $commitMessage"
git commit -m "$commitMessage" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Warning "⚠️ Nothing to commit. Maybe no changes?"
}

Write-Output "🚀 Pushing to $branch..."
git push origin $branch

Write-Output "✅ Deploy complete!"
