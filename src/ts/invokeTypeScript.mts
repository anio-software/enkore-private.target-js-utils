import ts from "typescript"
import type {CompilerHost, CompilerOptions} from "typescript"

export async function tsInvokeTypeScript(
	host : CompilerHost, input_files : string[], compiler_options : CompilerOptions
) {
	if (host === null) host = ts.createCompilerHost(compiler_options)

	const program = ts.createProgram(input_files, compiler_options, host)

	const result = program.emit()

	const all_diagnostics = ts.getPreEmitDiagnostics(program).concat(result.diagnostics)

	let diagnostic_messages = []

	for (const diagnostic of all_diagnostics) {
		const {code, messageText} = diagnostic
		const message = ts.flattenDiagnosticMessageText(messageText, "\n")

		if (diagnostic.file) {
			// @ts-ignore:next-line
			const {line, character} = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start)

			diagnostic_messages.push({
				code,
				message: `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
			})
		} else {
			diagnostic_messages.push({code, message})
		}
	}

	return {
		errors: result.emitSkipped,
		diagnostic_messages
	}
}
