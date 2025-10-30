<CardContent>
  <Select onValueChange={setHomeType}>
    <SelectTrigger className="bg-white"><SelectValue placeholder="Selecciona" /></SelectTrigger>
    <SelectContent>
      <SelectItem value="piso">Piso</SelectItem>
      <SelectItem value="casa">Casa</SelectItem>
      <SelectItem value="atico">Ático</SelectItem>
      <SelectItem value="unifamiliar">Unifamiliar</SelectItem>
    </SelectContent>
    {/* Mostrar selector nativo */}
    <NativeSelect />
  </Select>
</CardContent>
