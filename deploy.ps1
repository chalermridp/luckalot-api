$StageName = $args[0]
if ($null -eq $StageName) {
    $StageName = 'dev'
}

Remove-Item -LiteralPath "node_modules" -Force -Recurse
Remove-Item -LiteralPath "artifact" -Force -Recurse

New-Item -ItemType Directory -Path artifact
npm install
npm run build
npm prune --production

$compress = @{
    Path = "dist", "node_modules"
    DestinationPath = "artifact/luckalot-api.zip"
    CompressionLevel = "Fastest"
}
Compress-Archive @compress

aws cloudformation package --template-file template.yaml --s3-bucket luckalot-api-artifact --output-template-file artifact/template.$StageName.out.yaml --profile luckalot.$StageName
aws cloudformation deploy --template-file artifact/template.$StageName.out.yaml --stack-name luckalot-api-stack --capabilities CAPABILITY_NAMED_IAM --profile luckalot.$StageName