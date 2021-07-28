/**
 * @NApiVersion 2.1
 */
import * as fs from 'fs'
import { exec } from 'child_process'

const library_functions = {
	fs: () => fs,
	exec: (cmd, func, options) => exec(cmd, func, options),
}